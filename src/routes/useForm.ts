import { ReactElement, useState } from "react";

export function useForm(steps: ReactElement[]) {
    const [currStepIndex, setCurrStepIndex] = useState(0);

    function back(){
        setCurrStepIndex(i => {
            return (i <= 0) ? i : i - 1;
        });
    }

    function next(){
        setCurrStepIndex(i => {
            return (i >= steps.length - 1) ? i : i + 1;
        });
    }

    function goTo(index: number){
        setCurrStepIndex(index);
    }

    return {
        currStepIndex,
        step: steps[currStepIndex],
        steps,
        isFirstStep: currStepIndex == 0,
        isLastStep: currStepIndex == steps.length - 1,
        goTo,
        back,
        next,
    }
}