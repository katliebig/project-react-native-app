import React from "react"
import { Share, TouchableOpacity } from "react-native"
import styled from "styled-components/native"


const RecipeText = styled.Text`
  color: black;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
`
const Paragraph = styled.Text`
  font-size: 16px;
  text-align: left;
`

const HeadingText = styled(Paragraph)`
  font-weight: 700;
  margin-bottom: 5px;
  align-self: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: #ff5447;
`

const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
`

const Subcontainer = styled.View`
  margin: 10px 0;
`

const RecipeContainer = styled.ScrollView`
  padding: 20px;
`
const InstructionsText = styled.Text`
  color: black;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  padding: 20px;
  border-top-width: 1px;
  border-top-color: lightgrey;  
  margin-bottom: 20px;
`

const RecipeDetails = ({ recipeDetails, sharedRecipe }) => {

  const shareRecipe = async () => {
    try {
      await Share.share({
        url: sharedRecipe
      })
    } catch {
      alert("Sorry, sharing is not available on your platform.")
    }
  }

  return (
    <RecipeContainer>

      <RecipeText>{recipeDetails.title}</RecipeText>

      <TouchableOpacity onPress={shareRecipe}>
        <RecipeImage source={{ uri: recipeDetails.image }} />
      </TouchableOpacity>

      <Subcontainer>

        <HeadingText>Ingredients</HeadingText>

        {recipeDetails.extendedIngredients.map(ingredient => (
          <Paragraph key={ingredient.id} >🍴 {ingredient.name}</Paragraph>
        ))}

      </Subcontainer>

      <Subcontainer>

        <HeadingText>Instructions</HeadingText>

        <Paragraph>{recipeDetails.instructions !== null && recipeDetails.instructions.replace(/<\/?[^>]+>/gi, '')}</Paragraph>

      </Subcontainer>

      <InstructionsText>
        Sounds good? Tap the image to share the recipe with your friends!
      </InstructionsText>

    </RecipeContainer>
  )
}

export default RecipeDetails