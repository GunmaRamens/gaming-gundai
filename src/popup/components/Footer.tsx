import OpenOptions from "../../utils/openOptions";

export default function Footer() {
    return (
        <div className="my-5 flex justify-center child:m-2">
            <button className="btn" onClick={() => OpenOptions("about")}>
                この拡張機能について
            </button>
            <button className="btn" onClick={() => OpenOptions("home")}>
                設定
            </button>
        </div>
    );
}
