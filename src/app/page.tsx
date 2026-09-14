import { redirect } from "next/navigation";
import { DEFAULT_LANGUAGE } from "@/lib/language";

export default function RootPage() {
  redirect(`/${DEFAULT_LANGUAGE}`);
}
