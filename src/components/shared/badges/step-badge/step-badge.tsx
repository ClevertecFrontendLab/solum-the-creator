import { Badge, Text } from '@chakra-ui/react';

type StepBadgeProps = {
    step: number;
    isLastStep?: boolean;
};

export const StepBadge: React.FC<StepBadgeProps> = ({ step, isLastStep = false }) => {
    const bgColor = isLastStep ? 'lime.50' : 'blackAlpha.100';
    return (
        <Badge variant='brand' display='inline-flex' bgColor={bgColor} alignItems='center'>
            <Text as='span'>Шаг {step}</Text>
        </Badge>
    );
};
