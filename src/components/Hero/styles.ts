import styled from "styled-components";



export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.9rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
      font-size: 2rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }

  @media(min-width:961px){
    width:60%;
  }
  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 4rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
    .hero-text{

      h1{
        font-size: 3rem;
      }
    }
  }
`