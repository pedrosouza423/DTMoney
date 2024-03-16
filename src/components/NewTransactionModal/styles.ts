import { styled } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    inset: 0;
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        display: flex;
        margin-top: 2rem;
        flex-direction: column;
        gap: 1rem;

        input {
            padding: 1rem;
            border-radius: 6px;
            border: 0px;
            background: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};

            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }

        button[type="submit"] {
            height: 50px;
            border: 0px;
            border-radius: 6px;
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            margin-top: 1.5rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme["green-700"]};
                transition: 0.2s;
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${props => props.theme["gray-500"]};
`;