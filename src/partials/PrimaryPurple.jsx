import styled from "styled-components";

/**
 * Usage:
 * <PrimaryPurple href={website link}>
 *   { button display content }
 * </PrimaryPurple>
 *
 * <PrimaryPurple href={external link} target="_blank">
 *   { button display content }
 * </PrimaryPurple>
 *
 * Add className="disabled" for disabled state
 */
export const PrimaryPurple = styled.a`
  color: #ffffff;
  background-color: #5d45db;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600 !important;
  text-decoration: none;
  margin: 2px 0;
  padding: 10px 28px 11px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 0;
  display: inline-flex;
  align-items: center;

  svg {
    transition: all 0.3s;
    stroke: #fff;
    z-index: 1;
    padding-bottom: 2px;
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
