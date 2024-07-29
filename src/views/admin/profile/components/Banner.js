// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Banner(props) {
	const { banner, avatar, name, job, posts, followers, following } = props;
	const { user, logout } = useAuth0();

	// Chakra Color Mode
	const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
	const textColorSecondary = "gray.400";
	const borderColor = useColorModeValue(
		"white !important",
		"#111C44 !important"
	);

	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<Card mb={{ base: "0px", lg: "20px" }} align='center'>
			<Box bg={`url(${banner})`} bgSize='cover' borderRadius='16px' h='131px' w='100%' />
			<Avatar
				mx='auto'
				src={user.picture || 'default-avatar.jpg'}
				h='87px'
				w='87px'
				mt='-43px'
				border='4px solid'
				borderColor={borderColor}
			/>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
				{user.given_name || 'First Name'} {user.family_name || 'Last Name'}
			</Text>
			<Text color={textColorSecondary} fontSize='sm'> {user.email || 'Email Id'} </Text>
			
			<Flex w='max-content' mx='auto' mt='26px'> 
				<Flex mx='auto' me='60px' align='center' direction='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{posts || 0}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Posts
					</Text>
				</Flex>
				<Flex mx='auto' me='60px' align='center' direction='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{followers || 0}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Followers
					</Text>
				</Flex>
				<Flex mx='auto' align='center' direction='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{following || 0}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Following
					</Text>
				</Flex>
			</Flex>
		</Card>
	);
}
