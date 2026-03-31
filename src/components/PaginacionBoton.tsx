interface Props {
    disabled: boolean,
    label: string
    onClick: () => void;
}

export const PaginacionBoton = ({disabled, onClick, label}: Props) => {
    return (
        < button disabled={disabled}
            onClick={onClick}
            className="px-4 py-2 rounded-lg border border-gray-200 font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors active:scale-95"
        >
            {label}
        </button >
    )
}
