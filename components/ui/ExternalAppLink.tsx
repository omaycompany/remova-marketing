type ExternalAppLinkProps = React.ComponentPropsWithoutRef<"a">;

export default function ExternalAppLink({
    target = "_blank",
    rel,
    ...props
}: ExternalAppLinkProps) {
    const resolvedRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

    return <a target={target} rel={resolvedRel} {...props} />;
}
