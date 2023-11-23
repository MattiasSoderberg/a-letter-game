import React from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import MenuContentContainer from "./MenuContentContainer";

const DrawerMenu = () => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <MenuContentContainer />
    </NextIntlClientProvider>
  );
};

export default DrawerMenu;
