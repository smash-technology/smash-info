import styled from "styled-components";

/**
 * Usage:
 * <PrimaryWhite href={website link}>
 *   { button display content }
 * </PrimaryWhite>
 *
 * <PrimaryWhite href={external link} target="_blank">
 *   { button display content }
 * </PrimaryWhite>
 *
 * Add className="disabled" for disabled state
 */
export const PrimaryWhite = styled.a`
  color: #464C72;
  background-color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600 !important;
  text-decoration: none;
  padding: 10px 28px 11px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;

  svg {
    transition: all 0.3s;
    stroke: #464C72;
  }

  &:hover {
    opacity: 0.75;

    svg {
      transform: translateX(2px);
    }
  }

  &.disabled {
    background-color: #858585;
    cursor: not-allowed;

    &:hover {
      opacity: 1;
      svg {
        transform: translateX(0);
      }
    }
  }
`;
