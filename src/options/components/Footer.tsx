import classNames from "classnames";
import { Footer as DaisyFooter } from "react-daisyui";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={className}>
            <DaisyFooter className="bg-neutral p-10 text-neutral-content">
                <div>
                    <DaisyFooter.Title>Services</DaisyFooter.Title>
                    <FooterLink>Branding</FooterLink>
                    <FooterLink>Design</FooterLink>
                    <FooterLink>Marketing</FooterLink>
                    <FooterLink>Advertisement</FooterLink>
                </div>
                <div>
                    <DaisyFooter.Title>Company</DaisyFooter.Title>
                    <FooterLink>About us</FooterLink>
                    <FooterLink>Contact</FooterLink>
                    <FooterLink>Jobs</FooterLink>
                    <FooterLink>Press kit</FooterLink>
                </div>
                <div>
                    <DaisyFooter.Title>Legal</DaisyFooter.Title>
                    <FooterLink>Privacy policy</FooterLink>
                </div>
            </DaisyFooter>
        </footer>
    );
}

function FooterLink(props: React.HTMLAttributes<HTMLAnchorElement>) {
    return <a {...props} className={classNames(props.className, "link-hover link")} />;
}
