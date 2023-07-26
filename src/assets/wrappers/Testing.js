import styled from 'styled-components'


const Wrapper = styled.main`
nav{
    width:var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height:var(--nav-height);
    display: flex;
    align-items: center;
}

.page{
    min-height:calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
}

h1{
    font-weight:700;
    span{
        color:var(--primary-500);
    }
}

p{
    color:var(--grey-600);
}

.main-img{
    display:none ;
   
}

@media (min-width:922px) {
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap:3rem;
    }

    .main-img{
        display:block;
        animation: anim 3s infinite ease-in-out;
    }

    @keyframes anim{
        0% {
            position: relative;
            top: -1rem;
            left: -1rem;
        }
        50%{
            position: relative;
            top: 0rem;
            left: 0rem;
        }
        100%{
            position: relative;
            top: -1rem;
            left: -1rem;
        }
    }
    
}

`


export default Wrapper;