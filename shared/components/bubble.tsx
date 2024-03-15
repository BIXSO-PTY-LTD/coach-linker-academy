import { IconButton, Popover } from '@mui/material';
import { MouseEvent, ReactNode, useRef, useState } from 'react';
import Draggable from 'react-draggable';

export interface I_BubbleProps {
    children?: ReactNode;
    icon?: ReactNode;
    open?: boolean;
    toggleOpen?: () => void;
}

export const Bubble = ({ children, icon, open, toggleOpen }: I_BubbleProps) => {
    const bubbleRef = useRef(null);
    const [bubbleEl, setBubbleEl] = useState<HTMLButtonElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragging = () => {
        setIsDragging(true);
    };

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (isDragging) {
            setIsDragging(false);
            return;
        }

        toggleOpen?.();
        setBubbleEl(event.currentTarget);
    };

    return (
        <>
            <Draggable nodeRef={bubbleRef} onDrag={handleDragging}>
                <div ref={bubbleRef} className="fixed bottom-5 right-5 cursor-grab active:cursor-grabbing">
                    <IconButton
                        className="w-10 h-10 rounded-full text-black bg-[#90CAF9] hover:bg-[#64B5F6]"
                        aria-describedby={'bubblePopover'}
                        onClick={handleClick}
                    >
                        {icon}
                    </IconButton>
                </div>
            </Draggable>
            <Popover id="bubblePopover" anchorEl={bubbleEl} open={open ?? Boolean(bubbleEl)}>
                {children}
            </Popover>
        </>
    );
};
