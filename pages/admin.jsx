
import React, { useState, useRef } from 'react';
import { message, Popconfirm, } from 'antd';
import { useTranslation } from "next-i18next";
import { Modal, Table,  Menu } from '@mantine/core';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useDisclosure } from '@mantine/hooks';
const AdminCabinet = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const [users, setUsers] = useState([
        { id: 1000, username: "valijon", password: "000", email: "vali@gmail.com", role: "user" },
        { id: 10002, username: "valijon", password: "000", email: "vali@gmail.com", role: "user" },
        { id: 10003, username: "valiasdsdajon", password: "000", email: "vali@gmail.com", role: "user" },
        { id: 10004, username: "valijon", password: "000", email: "vali@gmail.com", role: "user" },
        { id: 10005, username: "valdasdjon", password: "000", email: "vali@gmail.com", role: "user" }

    ])
    const { t } = useTranslation("common", "account")

    const [tempId, setTemId] = useState(null)
    const [hide, setHide] = useState(null)
    const editNameRef = useRef()
    const editEmailRef = useRef()
    const editPasswordRef = useRef()
    const deleteUser = (id) => {
        setUsers(prevState => prevState.filter(user => user.id !== id))
    }


    const editUser = (id) => {
        setTemId(id)
        const editingUser = users.find(user => user.id === id)
        editNameRef.current = editingUser.username
        editEmailRef.current = editingUser.email
        editPasswordRef.current = editingUser.password

    }
    const saveEditUser = () => {
        setUsers(prevState => prevState.map(user => {
            if (user.id === tempId) {
                return {
                    ...user,
                    username: editNameRef.current.value,
                    email: editEmailRef.current.value,
                    password: editPasswordRef.current.value
                }
            } else return user
        }))
    }
    return (
        <div className='mx-auto container my-6'>
            <Table stickyHeader stickyHeaderOffset={60}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>
                            <p className="text-costumBlack text-sm">ID</p>

                        </Table.Th>
                        <Table.Th>
                            <p className="text-costumBlack text-sm">Username</p>

                        </Table.Th>
                        <Table.Th>
                            <p className="text-costumBlack text-sm">Email</p>

                        </Table.Th>
                        <Table.Th>
                            <p className="text-costumBlack text-sm">Password</p>

                        </Table.Th>
                        <Table.Th>
                            <p className="text-costumBlack text-sm">Actions</p>

                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
       
                    {
                        users?.length > 1 ? users?.map(user => {
                            if (user.role === "admin") {
                                console.log("admin");
                            } else if (user.id === hide) {
                                return <Table.Tr key={user.id}>
                                    <Table.Td>{user.id}</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td>
                                    <button className="bg-costum-blue text-white rounded-lg w-[40px] h-[40px] " onClick={() => setHide(null)}>
                                        eye
                                    </button>
                                    <button className="bg-costum-blue text-white rounded-lg w-[40px] h-[40px] ms-3" onClick={() => editUser(user.id) } onDoubleClick={open}>
                                        edit
                                    </button>
                                    <button className="bg-costum-blue text-white rounded-lg w-[40px] h-[40px] ms-3" >
                                        delete
                                    </button>

                                    </Table.Td>
                                </Table.Tr>
                            } else return <Table.Tr key={user.id}>
                                <Table.Td>{user.id}</Table.Td>
                                <Table.Td>{user.username}</Table.Td>
                                <Table.Td>{user.email} </Table.Td>
                                <Table.Td>{user.password}</Table.Td>
                                <Table.Td>
                                    <button className="bg-costum-blue text-white rounded-lg w-[40px] h-[40px] " onClick={() => setHide(user.id)}>
                                        eye
                                    </button>
                                    <button className="bg-costum-blue text-white rounded-lg w-[40px] h-[40px] ms-3" onClick={() => editUser(user.id) } onDoubleClick={open}>
                                        edit
                                    </button>
                                    <button className="bg-costum-blue text-white rounded-lg w-[40px] h-[40px] ms-3" onClick={() => deleteUser(user.id)}>
                                        delete
                                    </button>

                                </Table.Td>
                            </Table.Tr>
                        }) : <tr>Userlar Yoq</tr>
                    }
                </Table.Tbody>
            </Table>
            <Modal opened={opened} onClose={close} title="Authentication">
                <input type="text" placeholder='Username' ref={editNameRef} className="w-full bg-white outline-0 border pl-3 h-12 border-silver mb-3" />
                <input type="text" placeholder='Email' ref={editEmailRef} className="w-full bg-white outline-0 border pl-3 h-12 border-silver mb-3" />
                <input type="text" placeholder='Password' ref={editPasswordRef} className="w-full bg-white outline-0 pl-3 h-12 border border-silver mb-3" />
                <button type="button" className="bg-costum-blue text-white h-12 w-[130px] rounded-full"  onClick={saveEditUser }>Save changes</button>
            </Modal>
           
        </div>
    )
}

export default AdminCabinet

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "account"])),
        },
    }
}
