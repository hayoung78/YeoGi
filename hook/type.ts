import { CountryByContinent } from "@/app/(afterLogin)/createPost/_components/type"
import { UserRequest } from "@/app/(beforeLogin)/_auth/signin/type"
import { Continent } from "@/constants/continents"
import { UseMutationResult } from "@tanstack/react-query"

export type CountryProps = {
    countriesByContinent: CountryByContinent
    searchTerm: string
    selectedContinent: Continent
}
export type UserResponse = {
    accessToken: string;
    refreshToken: string;
};
export type SignInProps = {
    email: string
    password: string
}
export type SigninResult = UseMutationResult<UserResponse, Error, UserRequest> & {
    isOpen: boolean;
    formState: "success" | "fail" | null;
    handleOverlay:(isOpen: boolean, state?: "success" | "fail" | null)=>void
};