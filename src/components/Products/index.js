import styled from 'styled-components';
import Cards from '../Cards';

const CardLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export default function MyProducts({
  group,
  products,
  categories,
  att,
  setAtt,
}) {
  return group ? (
    <CardLine>
      {group.product_groups.length > 0
        && group.product_groups.map((product) => (
          <Cards
            product={product}
            key={product.product_id}
            categories={categories}
            setAtt={setAtt}
            att={att}
          />
        ))}
    </CardLine>
  ) : (
    <CardLine>
      {products.length > 0
        && products.map((product) => (
          <Cards
            product={product}
            key={product.product_id}
            categories={categories}
            setAtt={setAtt}
            att={att}
          />
        ))}
    </CardLine>
  );
}
