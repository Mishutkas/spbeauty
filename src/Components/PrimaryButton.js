import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        min-width: 144px;
        color: white;
        border-radius: 10px;
        &:hover {
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        &:active {
            background: #0F172A;
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;