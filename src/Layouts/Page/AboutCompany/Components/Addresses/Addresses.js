import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
    
        <div className='d-inline-flex flex-column gap-5 mt-4 p-4 adressesborder box'>                           
            <div> 
                <div className='title my-4'>Адреса заведений</div>
                <div className='d-inline-flex flex-column gap-4'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
            <div className="my-5"><SecondaryButton>Добавить филиал</SecondaryButton></div>
        </div>
    );
}

export default Addresses;