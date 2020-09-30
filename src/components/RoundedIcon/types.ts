export interface RoundedIconContainerType {
    inverted: boolean,
    invertedBg: string,
    bg: string
}

export interface RoundedIconType {
    bg?: string,
    invertedBg: string,
    inverted?: boolean,
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    icon?: string,
    title?: string,
}