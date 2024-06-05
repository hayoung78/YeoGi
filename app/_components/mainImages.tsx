import Image from "next/image"
import Polaroid from "./polaroid"
import {
    Line,
    Memo,
    Stamp01,
    Stamp02,
    Stamp03,
    Step01,
    Step02,
    Step03,
    Travel01,
    Travel02,
    Travel03,
} from "@/constants/mainImages"

export const LeftGroup = () => {
    return (
        <div className="flex flex-row relative items-start w-[70%] top-[10%]">
            <Image width={135} src={Travel01} alt="travel image" />
            <Image width={450} src={Travel02} className="pt-[2%]" alt="travel image" />
            <Image width={525} src={Travel03} className="absolute left-[42%] bottom-0" alt="travel image" />
            <Image width={315} src={Stamp03} className="absolute bottom-[-30%] -z-10" alt="travel stamp" />
        </div>
    )
}

export const RightGroup = () => {
    return (
        <div className="flex flex-col relative w-[30%]">
            <Image width={215} src={Memo} className="absolute top-[14%] right-0 z-10" alt="travel memo" />
            <Image width={332} src={Stamp01} className="absolute top-[36%] right-0" alt="travel stamp" />
            <Image width={129} src={Stamp02} className="absolute top-[44%] right-0" alt="travel stamp" />
        </div>
    )
}

export const Polaroids = () => {
    return (
        <div className="w-full h-[775px] pt-[24%]">
            <Image width={1920} src={Line} className="absolute top-[34%] z-[-1]" alt="string" />
            <div className="px-[88px] flex flex-row justify-between">
                <Polaroid
                    step="STEP 01"
                    src={Step01}
                    alt="step 01"
                    description="세계 곳곳을 다녀온 추억을"
                    spanText="기록하세요"
                    top={4}
                    rotateFront={0}
                    rotateBack={48}
                    mt={18}
                />
                <Polaroid
                    step="STEP 02"
                    src={Step02}
                    alt="step 02"
                    description="다른 사람의 여행 기록글을"
                    spanText="읽어보세요"
                    top={18}
                    rotateFront={-30}
                    rotateBack={49}
                    mt={40}
                />
                <Polaroid
                    step="STEP 03"
                    src={Step03}
                    alt="step 03"
                    description="좋아요와 댓글로 기록글에"
                    spanText="공감하세요"
                    top={10}
                    rotateFront={-50}
                    rotateBack={47}
                    mt={26}
                />
            </div>
        </div>
    )
}
