import { INestedMessages, flattenMessages } from "@/locales/flattenMessages";
import vi from "@/locales/vi.json";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
export type Locale = "vi";
const messages: Record<Locale, INestedMessages> = {
  vi,
};
export const useLocale = () => {
  const router = useRouter();
  const flattenedMessages = useMemo(
    () => flattenMessages(messages[router.locale as keyof typeof messages]),
    [router]
  );

  const switchLocale = useCallback(
    (locale: Locale) => {
      if (locale === router.locale) {
        return;
      }
      const path = router.asPath;
      return router.push(path, path, { locale });
    },
    [router]
  );
  return { locale: router.locale, switchLocale, messages: flattenedMessages };
};
