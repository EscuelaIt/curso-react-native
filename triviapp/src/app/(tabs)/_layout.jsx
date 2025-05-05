import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS as colors } from "../../styles/styles";
export default function _layout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.dark,
            headerTintColor: colors.primary,
            tabBarStyle: {
                borderTopWidth: 0,
            }

        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={24}
                    />
                    )
                }
                } />
            <Tabs.Screen
                name="playGame"
                options={{
                    title: "Play Game",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="gamepad-variant" color={color} size={24} />
                    )
                }} />
            <Tabs.Screen
                name="about"
                options={{
                    title: "About Us",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="information" color={color} size={24} />
                    )
                }
                } />
            <Tabs.Screen
                name="scoreBoard"
                options={{
                    title: "Best Scores",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="medal" color={color} size={24} />)

                }
                } />
        </Tabs>
    );
};