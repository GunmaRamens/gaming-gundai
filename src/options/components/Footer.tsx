import classNames from "classnames";
import { Footer as DaisyFooter } from "react-daisyui";
import { Link } from "react-router-dom";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={classNames(className, "bg-neutral")}>
            <DaisyFooter className="mx-auto w-2/3 py-5">
                <div>
                    <DaisyFooter.Title>Links</DaisyFooter.Title>
                    <FooterLink>About</FooterLink>
                </div>
                <div>
                    <DaisyFooter.Title>SNS</DaisyFooter.Title>
                    <FooterLink href="https://github.com/GunmaRamens">GitHub</FooterLink>
                    <FooterLink href="https://twitter.com/Hayao0819">Twitter</FooterLink>
                    <FooterLink href="https://www.instagram.com/Hayao0819">Instagram</FooterLink>
                </div>
                <div>
                    <DaisyFooter.Title>Legal</DaisyFooter.Title>
                    <FooterLink href="https://github.com/GunmaRamens/gaming-gundai/blob/master/PRIVACY.md">
                        Privacy Policy
                    </FooterLink>
                    <FooterLink href="https://github.com/GunmaRamens/gaming-gundai/blob/master/LICENSE.txt">
                        Software License
                    </FooterLink>
                    <FooterLink href="https://github.com/GunmaRamens/gaming-gundai/blob/master/SUSHI.md">
                        SUSHI License
                    </FooterLink>
                </div>
            </DaisyFooter>
        </footer>
    );
}

interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isInternal?: boolean;
}

function FooterLink(props: FooterLinkProps) {
    if (props.isInternal) {
        if (!props.href) props.href = "/";
        return <Link {...props} to={props.href} className={classNames(props.className, "link-hover link")} />;
    } else {
        const aProps = { ...props };
        delete props.isInternal;
        return <a {...aProps} className={classNames(props.className, "link-hover link")} />;
    }
}
