import styled from "styled-components";


export const Container = styled.section`
  

  h2{
    text-align: center;
    font-size: 5rem;
    margin-bottom: 10rem;
  }

  .projects{
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    margin-bottom:50px;
    overflow: hidden;
  }
    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--blue);
      }
    }

      

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      .project-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}


      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  

  @media (max-width: 1250px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 100%;
    }
    .project{
      grid-template-columns: 100%;
    }
    li{
      display:none;
    }
    h3{
      font-size:2rem;
    }
    h2{
      font-size:4rem;
    }
  }

  @media (max-width: 425px){
    h3{
      font-size:1.5rem;
    }
    h2{
      font-size: 3rem;
    }
   
  }
 
   

`