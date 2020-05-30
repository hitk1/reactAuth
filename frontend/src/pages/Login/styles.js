import styled from 'styled-components'
import background from '../../assets/blue-image-background2.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
    padding-top: 30px;
    margin-bottom: 30px;
    height: 85vh;
    max-height: 100%;
    min-height: 540px;
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
    margin: 5%;
`

export const RightContainer = styled.div`
    background: #ddd;
    flex: 0.35;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    h1 {
        margin-bottom: 25px;
    }

    p {
        font-size: 12px;
        margin-bottom: 25px;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-bottom: 5px;
            color: #333;
        }

        input {
            margin-bottom: 35px;
            border: 0;
            line-height:32px;
            padding: 0 10px;
        }

        button {
            width: 100%;
            height: 50px;
            border: 0;
            border-radius: 8px;
            color: #FFF;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            background: #4287f5;
            transition: filter 0.2s
        }

        button:hover {
            filter: brightness(90%);
        }
    }
`