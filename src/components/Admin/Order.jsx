import React from 'react';

const Order = () => {
    return (
        <>
            <div className="container p-2 mx-auto sm:p-4">
                <h2 className="mb-4 text-2xl font-semibold">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <thead className="bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Invoice #</th>
                                <th className="p-3">Client</th>
                                <th className="p-3">Issued</th>
                                <th className="p-3">Due</th>
                                <th className="p-3 text-right">Amount</th>
                                <th className="p-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 border-gray-900 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-900 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Tesla Inc.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$275</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-900 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Coca Cola co.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$8,950,500</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className=" py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-900 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Nvidia Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-400">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-400">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$98,218</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Order;