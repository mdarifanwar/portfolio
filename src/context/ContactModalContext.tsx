"use client";

import React, { createContext, useContext, useState } from "react";

interface ContactModalContextType {
  isOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  isOpen: false,
  openContact: () => {},
  closeContact: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = () => setIsOpen(true);
  const closeContact = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openContact, closeContact }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
