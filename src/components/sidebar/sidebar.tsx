import { Logo } from '@components/logo';
import { Button, Layout, Menu } from 'antd';
import { useState } from 'react';

import styles from './sidebar.module.scss';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { ExitIcon } from '@components/icons/exit-icon';

const { Sider } = Layout;

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        {
            key: '1',
            icon: (
                <CalendarTwoTone
                    style={{ fontSize: '16px' }}
                    twoToneColor={['#061178', '#061178']}
                />
            ),
            label: 'Календарь',
        },
        {
            key: '2',
            icon: <HeartFilled style={{ fontSize: '16px', color: '#061178' }} />,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: <TrophyFilled style={{ color: '#061178', fontSize: '16px' }} />,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: (
                <IdcardOutlined
                    style={{
                        color: '#061178',
                        fontSize: '16px',
                        transform: 'scaleX(0.8)',
                    }}
                />
            ),
            label: 'Профиль',
        },
    ];

    const onClick = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider
            width={208}
            collapsible
            trigger={null}
            collapsed={collapsed}
            collapsedWidth={64}
            className={styles.sidebar}
        >
            <div className={styles.logo}>
                <Logo collapsed={collapsed} />
            </div>
            <Menu
                defaultSelectedKeys={undefined}
                items={menuItems}
                mode='inline'
                inlineIndent={16}
                className={styles.menu}
            />
            <div className={styles.toggle_container}>
                <div className={styles.trapezoid_container}>
                    <div className={styles.trapezoid} />
                </div>
                <Button onClick={onClick} type='text' className={styles.toggle_button}>
                    {collapsed ? (
                        <MenuUnfoldOutlined style={{ color: '#8C8C8C' }} />
                    ) : (
                        <MenuFoldOutlined style={{ color: '#8C8C8C' }} />
                    )}
                </Button>
            </div>

            <Button type='text' className={styles.exit} size='large'>
                <ExitIcon />
                {!collapsed && 'Выход'}
            </Button>
        </Sider>
    );
};