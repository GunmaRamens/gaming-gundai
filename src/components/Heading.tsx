import classNames from "classnames";

export default class Heading {
    static h2(props: React.HtmlHTMLAttributes<HTMLHeadingElement>) {
        return <h2 {...props} className={classNames(props.className, "prose prose-2xl font-bold")}></h2>;
    }
}
