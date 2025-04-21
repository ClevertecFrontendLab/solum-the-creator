import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { PortionInput } from '~/components/ui/inputs/portion-input/portion-input';
import { Ingredient } from '~/constants/data/recipes';
import { usePortionCalculator } from '~/hooks/use-portion-calculator';

type RecipeTableSectionProps = {
    ingredients: Ingredient[];
    portions: number;
};

export const RecipeTableSection: React.FC<RecipeTableSectionProps> = ({
    ingredients,
    portions,
}) => {
    const { currentPortions, setCurrentPortions, calculatePortion } =
        usePortionCalculator(portions);

    return (
        <TableContainer w='100%' as='section'>
            <Table variant='recipe' size='custom'>
                <Thead>
                    <Tr>
                        <Th>Ингридиенты</Th>
                        <Th textAlign='right' py={2}>
                            <PortionInput value={currentPortions} onChange={setCurrentPortions} />
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {ingredients.map((ingredient) => (
                        <Tr key={ingredient.title}>
                            <Td>{ingredient.title}</Td>
                            <Td textAlign='right'>
                                {calculatePortion(ingredient)} {ingredient.measureUnit}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
