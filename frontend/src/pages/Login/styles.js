import styled from 'styled-components'
import background from '../../assets/blue-image-background2.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
    padding-top: 30px;
    margin-bottom: 30px;
    height: 65vh;
    max-height: 100%;
    min-height: 680px;
`
export const LeftContainer = styled.div`
    background: url(${background}) no-repeat center top;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    flex: 0.65;
    display: flex;
    flex-direction: column-reverse;    
`

export const FooterScrim = styled.div`
    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    height: 8vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 15px 20px;

    h3, p {
        color: #FFF;
        margin-bottom: 10px;
    }
`

export const FormContainer = styled.div`
    margin: 10%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 15px;
    }

    h1 {
        margin-bottom: 25px;
    }

    p {
        font-size: 12px;
        margin-bottom: 25px;
    }

    form {
        width: 100%;
        align-self: flex-start;
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 5px;
            color: #333;
        }

        input {
            margin-bottom: 15px;
            border: 1px solid #DCDCE6;
            border-radius: 4px;
            line-height:32px;
            padding: 0 10px;
        }

        button {
            margin-top: 35px;
            width: 100%;
            height: 35px;
            border: 0;
            border-radius: 8px;
            color: #FFF;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            background: #4287f5;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
            transition: filter 0.2s
        }

        button:hover {
            filter: brightness(90%);
        }
    }

    section {
        display: flex;
        margin-top: 35px;

        p {
            font-size: 14px;
        }
    }


`

export const RightContainer = styled.div`
    background: #ddd;
    flex: 0.35;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`
export const ErrorMessage = styled.p`
    font-size: 12px;
    color: red;
`