import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

type SubmitBtnProps = {
    label: string;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ label }) => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group flex h-[2.5rem] w-[7rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:bg-opacity-65"
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
            ) : (
                <>
                    {label}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                </>
            )}
        </button>
    );
};

export default SubmitBtn;
