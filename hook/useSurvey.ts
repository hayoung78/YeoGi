import { getRandomQuestion } from "@/app/(beforeLogin)/survey/_components/surveyForm/getRandomQuestion"
import { calculateTopTags } from "@/app/(beforeLogin)/survey/_components/surveyForm/survey.util"
import { SurveyQuestion } from "@/data/surveyQuestion"
import { SurveyOption } from "@/data/type"
import { useState } from "react"

export const useSurvey = () => {
    const surveyArr: SurveyOption[] = (() => {
        const selectedQuestions: SurveyOption[] = []
        const selectedIndexes: number[] = []
        while (selectedQuestions.length < 5) {
            const randomIdx = getRandomQuestion(SurveyQuestion, selectedIndexes)
            selectedQuestions.push(SurveyQuestion[randomIdx])
            selectedIndexes.push(randomIdx)
        }
        return selectedQuestions
    })()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [choices, setChoices] = useState<{ choices: number[]; tags: string[][] }>({
        choices: Array(5).fill(-1),
        tags: Array(5).fill([]),
    })

    const handleNext = () => {
        setCurrentIndex(prev => prev + 1)
    }

    const handlePrev = () => {
        setCurrentIndex(prev => prev - 1)
    }

    const handleChoice = (questionIndex: number, choiceIndex: number) => {
        const newChoices = [...choices.choices]
        newChoices[questionIndex] = choiceIndex

        const newTags = [...choices.tags]
        const selectedTag =
            choiceIndex === 0 ? surveyArr[questionIndex].choice1.tags : surveyArr[questionIndex].choice2.tags
        newTags[questionIndex] = selectedTag

        setChoices({ choices: newChoices, tags: newTags })
        handleNext()
    }

    const topTags = calculateTopTags(choices.tags)

    return {
        surveyArr,
        currentIndex,
        choices,
        topTags,
        handleChoice,
        handlePrev,
    }
}