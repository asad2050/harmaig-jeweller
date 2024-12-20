import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { products } from "./data"; // Import the products data

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

   @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 8px;

    @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const MainImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;

    @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const ProductInfo = styled.div`
  text-align: left;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Details = styled.p`
  margin-bottom: 1rem;
`;

const KaratOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const KaratButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f9f9f9;

  &:hover {
    background-color: #eaeaea;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

    @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const DoorwayDealButton = styled(ActionButton)`
  background-color: white;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 2px solid white;
  }
`;

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId)); // Find the product by ID

  const [selectedImage, setSelectedImage] = useState(product?.images[0] || "");

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Container>
      <MainImage src={selectedImage} alt={product.title} />
      {product.images.length > 1 && (
        <ImageGallery>
          {product.images.map((image, index) => (
            <ProductImage
              key={index}
              src={image}
              alt={`Product angle ${index + 1}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </ImageGallery>
      )}
      <ProductInfo>
        <Title>{product.title}</Title>
        <Details>SKU: {product.sku}</Details>
        <Price>{product.price}</Price>
        <Details>Weight: {product.weight}</Details>
      </ProductInfo>
      <ButtonContainer>
        <ActionButton>Add to Cart</ActionButton>
        <ActionButton>Call Us</ActionButton>
        <DoorwayDealButton>Doorway Deal</DoorwayDealButton>
      </ButtonContainer>
    </Container>
  );
};

export default ProductDetail;
