import React from "react"
import { FormBtnProps } from "../type"

const FormBtn = ({ setIsOverlayOpen }: FormBtnProps) => {
    return (
        <div className="flex justify-end space-x-4">
            <button className="bg-GREY-50 text-SYSTEM-white py-[12px] px-[20px] rounded-xl">임시저장</button>
            <button
                onClick={() => setIsOverlayOpen(true)}
                className="bg-SYSTEM-black text-SYSTEM-white py-[12px] px-[20px] rounded-xl"
            >
                기록 올리기
            </button>
        </div>
    )
}

export default FormBtn