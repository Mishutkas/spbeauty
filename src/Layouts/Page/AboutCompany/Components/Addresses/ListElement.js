import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    color: #666787;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option className='flex-grow-1 py-2 mindlina'>{props.children}</Option>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;