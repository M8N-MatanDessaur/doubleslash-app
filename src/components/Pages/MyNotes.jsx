import React, { useState } from "react";
import MainLayout from "../Layout_Components/MainLayout";
import NoteModal from "../Notes_Components/NoteModal";
import useSWR, { mutate } from "swr";
import axios from "axios";

export default function MyNotes() {
  const [selectedCard, setselectedCard] = useState(0);
  const [selectedId, setSelectedId] = useState(0);
  const connectedUser = sessionStorage.getItem("connectedUser");
  const profilePicture = sessionStorage.getItem("profile");
  const API_BASE_URL = "http://127.0.0.1:4040";
  const get_url = `${API_BASE_URL}/notes/notes/${connectedUser}`;

  const [modalOpen, setModalOpen] = useState(false);

  const updateNotes = async () => {
    const res = await axios.get(get_url);
    mutate(get_url, res.data);
  };

  const closeModal = async () => {
    const res = await axios.get(get_url);
    mutate(get_url, res.data);
    setModalOpen(false);
  };

  const openModal = async (e, noteId) => {
    const targetId = e.currentTarget.getAttribute("data-id");
    const targetNote = e.currentTarget.getAttribute("data-note");
  
    if (!targetId) {
      console.error("Unable to read 'data-id' attribute");
      return;
    }
    const res = await axios.get(get_url);
    mutate(get_url, res.data);
    setModalOpen(true);
    setselectedCard(targetId);
    setSelectedId(targetNote);
  };
  

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: notes, error } = useSWR(get_url, fetcher,  { revalidateOnFocus: true });
  
  if (error) return <div>Error loading notes</div>;
  if (!notes) return <div>Loading...</div>;
  return (
    <div className="App">
      <MainLayout
        openModal={openModal}
        notes={notes}
        user={connectedUser}
        profile={profilePicture}
        mutate={updateNotes}
      />
      <NoteModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        user={connectedUser}
        notes={notes}
        selectedId={selectedId}
        selectedCard={selectedCard}
      />
    </div>
  );
}
