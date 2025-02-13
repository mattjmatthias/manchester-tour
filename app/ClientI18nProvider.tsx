"use client";

import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Adjust the path if needed

interface ClientI18nProviderProps {
  children: ReactNode;
}

export default function ClientI18nProvider({ children }: ClientI18nProviderProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}