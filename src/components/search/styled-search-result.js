import { styled } from '@mui/material/styles';
import SearchResult from "./search-result"

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  padding: 1rem;
  border-top: 1px solid #e0e0e0;


  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 1em;

      a {
        color: ${({ theme }) => theme.foreground};

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }

`