import { redirect } from "next/navigation";

/** MyRocky-style URL → main ZONNIC landing. */
export default function ProductZonnicRedirect() {
  redirect("/zonnic");
}
