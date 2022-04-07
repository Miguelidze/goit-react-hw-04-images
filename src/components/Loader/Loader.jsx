import { TailSpin } from "react-loader-spinner";
import s from './Loader.module.css';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
    return (
        <div className={s.Loader}>
            <TailSpin ariaLabel="loading-indicator" />
        </div>
    );
}