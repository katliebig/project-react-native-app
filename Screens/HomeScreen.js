import React, { useState } from "react"
import styled from "styled-components/native"
import Dish from "../components/Dish"
import Cuisine from '../components/Cuisine';
import Diet from "../components/Diet"

const Container = styled.ScrollView`
  flex: 1;
`

const Category = styled.View`
  padding: 10px;  
`

const SubmitText = styled.Text`
  font-weight: 700;
  font-size: 20px;  
`

const CategoryLabel = styled.Text`
  font-size: 20px;
  margin: 5px 10px;
`

const Label = styled.Text`
  font-size: 14px;
  margin: 0 0 10px 10px;
`

const SubmitTouchable = styled.TouchableOpacity`
  margin: 20px 0;
  padding: 10px 30px;
  background-color: #ff5447;
  align-self: center;
  border-radius: 20px;
`

const SubmitTouchableDisabled = styled.TouchableOpacity`
  margin: 20px 0;
  padding: 10px 30px;
  background-color: #ff5447;
  align-self: center;
  border-radius: 20px;
  opacity: 0.5;
`

const HomeScreen = ({ navigation, dishes, cuisine, diets, dishQuery, setDishQuery, cuisineQuery, setCuisineQuery, setDietQuery }) => {
  const [checkedDish, setCheckedDish] = useState('');
  const [checkedDiet, setCheckedDiet] = useState('');

  const handleTap = () => {
    navigation.navigate("Recipe Suggestions")
  }

  const chooseDish = (dish) => {
    setCheckedDish(dish)
    setDishQuery(dish)
  }
  const chooseCuisine = (cuisine) => {
    setCuisineQuery(cuisine)
  }
  const chooseDiet = (diet) => {
    setCheckedDiet(diet)
    setDietQuery(diet)
  }

  return (
    <Container>
      <Category>
        <CategoryLabel>What kind of dish would you like?</CategoryLabel>
        <Label>(required)</Label>
        <Dish
          dishes={dishes}
          chooseDish={chooseDish}
          checkedDish={checkedDish}
        />
      </Category>

      <Category>
        <CategoryLabel>Would you like a special cuisine?</CategoryLabel>
        <Label>(optional)</Label>
        <Cuisine
          cuisine={cuisine}
          cuisineQuery={cuisineQuery}
          chooseCuisine={chooseCuisine}
        />
      </Category>

      <Category>
        <CategoryLabel>Any dietary restrictions?</CategoryLabel>
        <Label>(optional)</Label>
        <Diet
          diets={diets}
          chooseDiet={chooseDiet}
          checkedDiet={checkedDiet}
        />
      </Category>

      {dishQuery === "" && <SubmitTouchableDisabled disabled={true}>
        <SubmitText>
          Tap to get recipe
        </SubmitText>
      </SubmitTouchableDisabled>}

      {dishQuery !== "" && <SubmitTouchable onPress={handleTap}>
        <SubmitText>
          Tap to get recipe
        </SubmitText>
      </SubmitTouchable>}

    </Container >
  )
}

export default HomeScreen