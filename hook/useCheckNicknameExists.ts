import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { postMemberCheckExists } from "@/apis/auth/socialSignup"
import { z } from "zod"
import { SocialSignupSchema } from "@/constants/signinSchema"

const useCheckNicknameExists = () => {
    const [message, setMessage] = useState<string | null>(null)
    const [isNicknameValid, setIsNicknameValid] = useState<boolean | null>(null)

    const mutation = useMutation({
        mutationKey: ["checkNickname"],
        mutationFn: postMemberCheckExists,
        onSuccess: (nickname: { nicknameExists: boolean }) => {
            if (nickname.nicknameExists) {
                setMessage("중복된 닉네임입니다")
                setIsNicknameValid(false)
            } else {
                setMessage("사용 가능한 닉네임입니다")
                setIsNicknameValid(true)
            }
        },
        onError: () => {
            setMessage("닉네임 확인 중 오류가 발생했습니다")
            setIsNicknameValid(false)
        },
    })

    const checkNickname = (nickname: string) => {
        setMessage(null)
        const result = SocialSignupSchema.safeParse(nickname)
        if (!result.success) {
            setMessage("닉네임은 3자 이상 10자 이하로 입력해주세요")
            setIsNicknameValid(false)
            return
        }
        mutation.mutate(nickname)
    }

    return { checkNickname, message, isNicknameValid }
}

export default useCheckNicknameExists
