import { Iuser } from "src/types/interfaces";

export const strongTextColor = "#EB1D36";

export const user: Iuser = JSON.parse(String(localStorage.getItem("user"))) ?? undefined;
export const jwt: string = JSON.parse(String(localStorage.getItem("jwt"))) ?? undefined;
