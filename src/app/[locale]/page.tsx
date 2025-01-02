import Header from "@/component/header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Header />
      <h1>{t("title")}</h1>
    </div>
  );
}
