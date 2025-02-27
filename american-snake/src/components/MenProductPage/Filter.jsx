import {
  Checkbox,
  Stack,
  Text,
  Flex,
  Box,
  CheckboxGroup,
  Divider,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
export const Filter = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  //getting prev data so that on refresh checkbpx remain intact
  const initialCatData = searchParam.getAll("category");
  const initialBrandData = searchParam.getAll("brand");
  const [category, setCategory] = useState(initialCatData || []);
  const [brand, setBrand] = useState(initialBrandData || []);
  // console.log(brand.includes("Puma"));
  //change event on checkbox
  const handleCategoryChange = (e) => {
    let value = e.target.value;
    // console.log(value)
    let newCat = [...category];
    if (newCat.includes(value)) {
      newCat = newCat.filter((el) => el !== value);
    } else {
      newCat.push(value);
    }
    setCategory(newCat);
  };
  const handleBrandChange = (e) => {
    let value = e.target.value;
    // console.log(value)
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
  useEffect(() => {
    let params = {
      category,
      brand,
    };
    // order && (params.order = order);
    setSearchParam(params);
  }, [category, brand]);
  return (
    <>
      <Box
        p={5}
        boxShadow={"md"}
        bgColor={"white"}
        position="sticky"
        top={"10%"}
        zIndex={10}
      >
        <Flex
          flexDirection={{
            base: "row",
            sm: "row",
            md: "row",
            lg: "column",
            xl: "column",
          }}
          justifyContent={"space-between"}
          borderColor="gray.200"
          padding={"10px"}
          overflow={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "scroll",
            xl: "scroll",
          }}
        >
          {/* <FilterComp /> */}
          <Text
            textAlign={"left"}
            letterSpacing={"1px"}
            fontWeight={"500"}
            mt={{ base: "20px", md: "20px", lg: "none" }}
          >
            FILTER <br />
            <Text as={"span"} fontWeight={"400"}>
              <i>34 Items</i>
            </Text>
          </Text>
          <Divider
            display={{ sm: "none", md: "none", lg: "inline" }}
            margin={"4px 0px"}
            border={"1px dotted gray"}
          ></Divider>

          <Stack
            spacing={[1, 2]}
            mt={"15px"}
            mb={"10px"}
            direction={["column", "rocolumnw"]}
          >
            <Text textAlign={"left"}>Brand</Text>
            <Checkbox
              name="adidas"
              isChecked={brand.includes("Adidas")}
              onChange={handleBrandChange}
              value="Adidas"
              colorScheme={"red"}
            >
              Adidas
            </Checkbox>
            <Checkbox
              name="puma"
              value="Puma"
              isChecked={brand.includes("Puma")}
              onChange={handleBrandChange}
              colorScheme={"red"}
            >
              Puma
            </Checkbox>
            <Checkbox
              name="nike"
              value="Nike"
              isChecked={brand.includes("Nike")}
              onChange={handleBrandChange}
              colorScheme={"red"}
            >
              Nike
            </Checkbox>
            <Checkbox
              name="campus"
              value="Campus"
              isChecked={brand.includes("Campus")}
              onChange={handleBrandChange}
              colorScheme={"red"}
            >
              Campus
            </Checkbox>
          </Stack>

          <Divider
            display={{ sm: "none", md: "none", lg: "inline" }}
            margin={"4px 0px"}
            border={"1px dotted gray"}
          ></Divider>

          <Stack
            spacing={[1, 2]}
            mt={"15px"}
            mb={"10px"}
            direction={["column", "rocolumnw"]}
          >
            <Text textAlign={"left"}>Categories</Text>
            <Checkbox
              name="shirt"
              value="shirt"
              onChange={handleCategoryChange}
              colorScheme={"red"}
            >
              T-Shirts
            </Checkbox>
            <Checkbox
              name="short"
              value="short"
              onChange={handleCategoryChange}
              colorScheme={"red"}
            >
              Shorts
            </Checkbox>
            <Checkbox
              name="shoes"
              value="shoes"
              onChange={handleCategoryChange}
              colorScheme={"red"}
            >
              Shoes
            </Checkbox>
            <Checkbox>Jeans</Checkbox>
            <Checkbox>Foot Wear</Checkbox>
          </Stack>

          <Divider
            display={{ sm: "none", md: "none", lg: "inline" }}
            margin={"4px 0px"}
            border={"1px dotted gray"}
          ></Divider>
          <CheckboxGroup colorScheme="orange">
            <Stack
              spacing={[1, 2]}
              mt={"15px"}
              mb={"10px"}
              direction={["column", "rocolumnw"]}
            >
              <Text textAlign={"left"}>Size</Text>
              <Checkbox value="small">Small</Checkbox>
              <Checkbox value="medium">Medium</Checkbox>
              <Checkbox value="large">Large</Checkbox>
            </Stack>
          </CheckboxGroup>
        </Flex>
      </Box>
    </>
  );
};
