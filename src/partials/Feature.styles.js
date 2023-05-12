export const SectionTemplate = styled.section`
  margin: 240px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .section__details {
    max-width: 448px;

    h6 {
      font-weight: 500;
    }
  }

  svg {
    max-width: 98%;
    height: auto;
  }

  img, svg {
    margin-left: 42px;
  }

  &.reverse__column img, &.reverse__column svg {
    margin-left: 0;
    margin-right: 42px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &.reverse__column {
      flex-direction: column-reverse;
    }

    img, svg {
      margin: 42px auto !important;
    }
  }
`;