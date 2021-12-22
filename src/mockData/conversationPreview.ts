import { ImgHTMLAttributes } from "react";
import { FaMandalorian } from "react-icons/fa";
import { ConversationPreview } from "../Interfaces/conversationPreview.interface";

export const MOCKED_MESSAGES: ConversationPreview[] = [
  {
    name: "Albert Einstein",
    text: "Kup ojczulkowi browarka",
    avatarUrl: "Albert_Einstein_Head.jpg",
  },
  {
    name: "Maria Curie-Składowska",
    text: "Ani się waż ojcu kupować alkohol",
    avatarUrl: "Maria.jpg",
  },
  {
    name: "Adam Małysz",
    text: "ale zadyma w domu",
    avatarUrl: "adam-malysz.jpg",
  },
];
