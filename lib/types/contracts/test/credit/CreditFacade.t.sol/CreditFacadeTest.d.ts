import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface CreditFacadeTestInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "cft()": FunctionFragment;
        "creditConfigurator()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "failed()": FunctionFragment;
        "setUp()": FunctionFragment;
        "test_FA_01A_constructor_sets_correct_values()": FunctionFragment;
        "test_FA_01_constructor_reverts_for_zero_address()": FunctionFragment;
        "test_FA_02_functions_reverts_if_borrower_has_no_account()": FunctionFragment;
        "test_FA_03A_openCreditAccount_correctly_wraps_ETH()": FunctionFragment;
        "test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH()": FunctionFragment;
        "test_FA_03C_closeCreditAccount_correctly_wraps_ETH()": FunctionFragment;
        "test_FA_03D_liquidate_correctly_wraps_ETH()": FunctionFragment;
        "test_FA_03E_addCollateral_correctly_wraps_ETH()": FunctionFragment;
        "test_FA_03F_multicall_correctly_wraps_ETH()": FunctionFragment;
        "test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance()": FunctionFragment;
        "test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account()": FunctionFragment;
        "test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode()": FunctionFragment;
        "test_FA_05_openCreditAccount_sets_correct_values()": FunctionFragment;
        "test_FA_06_openCreditAccount_reverts_for_hf_less_one(uint16)": FunctionFragment;
        "test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden()": FunctionFragment;
        "test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order()": FunctionFragment;
        "test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one(uint256,uint8)": FunctionFragment;
        "test_FA_10_no_free_flashloans_during_openCreditAccount()": FunctionFragment;
        "test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block()": FunctionFragment;
        "test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount()": FunctionFragment;
        "test_FA_12_closeCreditAccount_runs_operations_in_correct_order()": FunctionFragment;
        "test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure()": FunctionFragment;
        "test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1()": FunctionFragment;
        "test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events()": FunctionFragment;
        "test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure()": FunctionFragment;
        "test_FA_17_increaseDebt_executes_actions_as_expected()": FunctionFragment;
        "test_FA_18A_increaseDebt_revets_if_more_than_block_limit()": FunctionFragment;
        "test_FA_18B_increaseDebt_revets_if_more_than_block_limit()": FunctionFragment;
        "test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled()": FunctionFragment;
        "test_FA_19_decreaseDebt_executes_actions_as_expected()": FunctionFragment;
        "test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount()": FunctionFragment;
        "test_FA_21_addCollateral_executes_actions_as_expected()": FunctionFragment;
        "test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes()": FunctionFragment;
        "test_FA_23_multicall_reverts_for_unknown_methods()": FunctionFragment;
        "test_FA_24_multicall_reverts_for_creditManager_address()": FunctionFragment;
        "test_FA_25_multicall_reverts_for_non_adapters()": FunctionFragment;
        "test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected()": FunctionFragment;
        "test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected()": FunctionFragment;
        "test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one()": FunctionFragment;
        "test_FA_29_multicall_works_with_adapters_calls_as_expected()": FunctionFragment;
        "test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract()": FunctionFragment;
        "test_FA_31_approve_works_as_expected()": FunctionFragment;
        "test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled()": FunctionFragment;
        "test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance()": FunctionFragment;
        "test_FA_34_transferAccountOwnership_reverts_if_hf_less_1()": FunctionFragment;
        "test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed()": FunctionFragment;
        "test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max()": FunctionFragment;
        "test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly()": FunctionFragment;
        "test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account()": FunctionFragment;
        "test_FA_39_enable_token_balance()": FunctionFragment;
        "test_FA_40_isTokenAllowed_works_as_expected()": FunctionFragment;
        "test_FA_41_calcTotalValue_computes_correctly()": FunctionFragment;
        "test_FA_42_calcCreditAccountHealthFactor_computes_correctly()": FunctionFragment;
        "test_FA_43_hasOpenedCreditAccount_returns_correct_values()": FunctionFragment;
        "test_FA_44_config_functions_revert_if_called_non_configurator()": FunctionFragment;
        "test_FA_45_revertIfBalanceLessThan_works_correctly()": FunctionFragment;
        "underlying()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "cft" | "creditConfigurator" | "creditFacade" | "creditManager" | "failed" | "setUp" | "test_FA_01A_constructor_sets_correct_values" | "test_FA_01_constructor_reverts_for_zero_address" | "test_FA_02_functions_reverts_if_borrower_has_no_account" | "test_FA_03A_openCreditAccount_correctly_wraps_ETH" | "test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH" | "test_FA_03C_closeCreditAccount_correctly_wraps_ETH" | "test_FA_03D_liquidate_correctly_wraps_ETH" | "test_FA_03E_addCollateral_correctly_wraps_ETH" | "test_FA_03F_multicall_correctly_wraps_ETH" | "test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance" | "test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account" | "test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode" | "test_FA_05_openCreditAccount_sets_correct_values" | "test_FA_06_openCreditAccount_reverts_for_hf_less_one" | "test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden" | "test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order" | "test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one" | "test_FA_10_no_free_flashloans_during_openCreditAccount" | "test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block" | "test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount" | "test_FA_12_closeCreditAccount_runs_operations_in_correct_order" | "test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure" | "test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1" | "test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events" | "test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure" | "test_FA_17_increaseDebt_executes_actions_as_expected" | "test_FA_18A_increaseDebt_revets_if_more_than_block_limit" | "test_FA_18B_increaseDebt_revets_if_more_than_block_limit" | "test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled" | "test_FA_19_decreaseDebt_executes_actions_as_expected" | "test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount" | "test_FA_21_addCollateral_executes_actions_as_expected" | "test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes" | "test_FA_23_multicall_reverts_for_unknown_methods" | "test_FA_24_multicall_reverts_for_creditManager_address" | "test_FA_25_multicall_reverts_for_non_adapters" | "test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected" | "test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected" | "test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one" | "test_FA_29_multicall_works_with_adapters_calls_as_expected" | "test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract" | "test_FA_31_approve_works_as_expected" | "test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled" | "test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance" | "test_FA_34_transferAccountOwnership_reverts_if_hf_less_1" | "test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed" | "test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max" | "test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly" | "test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account" | "test_FA_39_enable_token_balance" | "test_FA_40_isTokenAllowed_works_as_expected" | "test_FA_41_calcTotalValue_computes_correctly" | "test_FA_42_calcCreditAccountHealthFactor_computes_correctly" | "test_FA_43_hasOpenedCreditAccount_returns_correct_values" | "test_FA_44_config_functions_revert_if_called_non_configurator" | "test_FA_45_revertIfBalanceLessThan_works_correctly" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "cft", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_01A_constructor_sets_correct_values", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_01_constructor_reverts_for_zero_address", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_02_functions_reverts_if_borrower_has_no_account", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_03A_openCreditAccount_correctly_wraps_ETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_03C_closeCreditAccount_correctly_wraps_ETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_03D_liquidate_correctly_wraps_ETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_03E_addCollateral_correctly_wraps_ETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_03F_multicall_correctly_wraps_ETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_05_openCreditAccount_sets_correct_values", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_06_openCreditAccount_reverts_for_hf_less_one", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "test_FA_10_no_free_flashloans_during_openCreditAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_12_closeCreditAccount_runs_operations_in_correct_order", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_17_increaseDebt_executes_actions_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_18A_increaseDebt_revets_if_more_than_block_limit", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_18B_increaseDebt_revets_if_more_than_block_limit", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_19_decreaseDebt_executes_actions_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_21_addCollateral_executes_actions_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_23_multicall_reverts_for_unknown_methods", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_24_multicall_reverts_for_creditManager_address", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_25_multicall_reverts_for_non_adapters", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_29_multicall_works_with_adapters_calls_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_31_approve_works_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_34_transferAccountOwnership_reverts_if_hf_less_1", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_39_enable_token_balance", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_40_isTokenAllowed_works_as_expected", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_41_calcTotalValue_computes_correctly", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_42_calcCreditAccountHealthFactor_computes_correctly", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_43_hasOpenedCreditAccount_returns_correct_values", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_44_config_functions_revert_if_called_non_configurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_FA_45_revertIfBalanceLessThan_works_correctly", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_01A_constructor_sets_correct_values", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_01_constructor_reverts_for_zero_address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_02_functions_reverts_if_borrower_has_no_account", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_03A_openCreditAccount_correctly_wraps_ETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_03C_closeCreditAccount_correctly_wraps_ETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_03D_liquidate_correctly_wraps_ETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_03E_addCollateral_correctly_wraps_ETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_03F_multicall_correctly_wraps_ETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_05_openCreditAccount_sets_correct_values", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_06_openCreditAccount_reverts_for_hf_less_one", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_10_no_free_flashloans_during_openCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_12_closeCreditAccount_runs_operations_in_correct_order", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_17_increaseDebt_executes_actions_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_18A_increaseDebt_revets_if_more_than_block_limit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_18B_increaseDebt_revets_if_more_than_block_limit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_19_decreaseDebt_executes_actions_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_21_addCollateral_executes_actions_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_23_multicall_reverts_for_unknown_methods", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_24_multicall_reverts_for_creditManager_address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_25_multicall_reverts_for_non_adapters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_29_multicall_works_with_adapters_calls_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_31_approve_works_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_34_transferAccountOwnership_reverts_if_hf_less_1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_39_enable_token_balance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_40_isTokenAllowed_works_as_expected", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_41_calcTotalValue_computes_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_42_calcCreditAccountHealthFactor_computes_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_43_hasOpenedCreditAccount_returns_correct_values", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_44_config_functions_revert_if_called_non_configurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_FA_45_revertIfBalanceLessThan_works_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    events: {
        "AddCollateral(address,address,uint256)": EventFragment;
        "CloseCreditAccount(address,address)": EventFragment;
        "DecreaseBorrowedAmount(address,uint256)": EventFragment;
        "ExecuteOrder(address,address)": EventFragment;
        "IncreaseBorrowedAmount(address,uint256)": EventFragment;
        "LiquidateCreditAccount(address,address,address,uint256)": EventFragment;
        "MultiCallFinished()": EventFragment;
        "MultiCallStarted(address)": EventFragment;
        "NewConfigurator(address)": EventFragment;
        "OpenCreditAccount(address,address,uint256,uint16)": EventFragment;
        "TransferAccount(address,address)": EventFragment;
        "TransferAccountAllowed(address,address,bool)": EventFragment;
        "log(string)": EventFragment;
        "log_address(address)": EventFragment;
        "log_bytes(bytes)": EventFragment;
        "log_bytes32(bytes32)": EventFragment;
        "log_int(int256)": EventFragment;
        "log_named_address(string,address)": EventFragment;
        "log_named_bytes(string,bytes)": EventFragment;
        "log_named_bytes32(string,bytes32)": EventFragment;
        "log_named_decimal_int(string,int256,uint256)": EventFragment;
        "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
        "log_named_int(string,int256)": EventFragment;
        "log_named_string(string,string)": EventFragment;
        "log_named_uint(string,uint256)": EventFragment;
        "log_string(string)": EventFragment;
        "log_uint(uint256)": EventFragment;
        "logs(bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CloseCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DecreaseBorrowedAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecuteOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncreaseBorrowedAmount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidateCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MultiCallFinished"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MultiCallStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewConfigurator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferAccountAllowed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}
export interface AddCollateralEventObject {
    onBehalfOf: string;
    token: string;
    value: BigNumber;
}
export declare type AddCollateralEvent = TypedEvent<[
    string,
    string,
    BigNumber
], AddCollateralEventObject>;
export declare type AddCollateralEventFilter = TypedEventFilter<AddCollateralEvent>;
export interface CloseCreditAccountEventObject {
    owner: string;
    to: string;
}
export declare type CloseCreditAccountEvent = TypedEvent<[
    string,
    string
], CloseCreditAccountEventObject>;
export declare type CloseCreditAccountEventFilter = TypedEventFilter<CloseCreditAccountEvent>;
export interface DecreaseBorrowedAmountEventObject {
    borrower: string;
    amount: BigNumber;
}
export declare type DecreaseBorrowedAmountEvent = TypedEvent<[
    string,
    BigNumber
], DecreaseBorrowedAmountEventObject>;
export declare type DecreaseBorrowedAmountEventFilter = TypedEventFilter<DecreaseBorrowedAmountEvent>;
export interface ExecuteOrderEventObject {
    borrower: string;
    target: string;
}
export declare type ExecuteOrderEvent = TypedEvent<[
    string,
    string
], ExecuteOrderEventObject>;
export declare type ExecuteOrderEventFilter = TypedEventFilter<ExecuteOrderEvent>;
export interface IncreaseBorrowedAmountEventObject {
    borrower: string;
    amount: BigNumber;
}
export declare type IncreaseBorrowedAmountEvent = TypedEvent<[
    string,
    BigNumber
], IncreaseBorrowedAmountEventObject>;
export declare type IncreaseBorrowedAmountEventFilter = TypedEventFilter<IncreaseBorrowedAmountEvent>;
export interface LiquidateCreditAccountEventObject {
    owner: string;
    liquidator: string;
    to: string;
    remainingFunds: BigNumber;
}
export declare type LiquidateCreditAccountEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], LiquidateCreditAccountEventObject>;
export declare type LiquidateCreditAccountEventFilter = TypedEventFilter<LiquidateCreditAccountEvent>;
export interface MultiCallFinishedEventObject {
}
export declare type MultiCallFinishedEvent = TypedEvent<[
], MultiCallFinishedEventObject>;
export declare type MultiCallFinishedEventFilter = TypedEventFilter<MultiCallFinishedEvent>;
export interface MultiCallStartedEventObject {
    borrower: string;
}
export declare type MultiCallStartedEvent = TypedEvent<[
    string
], MultiCallStartedEventObject>;
export declare type MultiCallStartedEventFilter = TypedEventFilter<MultiCallStartedEvent>;
export interface NewConfiguratorEventObject {
    newConfigurator: string;
}
export declare type NewConfiguratorEvent = TypedEvent<[
    string
], NewConfiguratorEventObject>;
export declare type NewConfiguratorEventFilter = TypedEventFilter<NewConfiguratorEvent>;
export interface OpenCreditAccountEventObject {
    onBehalfOf: string;
    creditAccount: string;
    borrowAmount: BigNumber;
    referralCode: number;
}
export declare type OpenCreditAccountEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    number
], OpenCreditAccountEventObject>;
export declare type OpenCreditAccountEventFilter = TypedEventFilter<OpenCreditAccountEvent>;
export interface TransferAccountEventObject {
    oldOwner: string;
    newOwner: string;
}
export declare type TransferAccountEvent = TypedEvent<[
    string,
    string
], TransferAccountEventObject>;
export declare type TransferAccountEventFilter = TypedEventFilter<TransferAccountEvent>;
export interface TransferAccountAllowedEventObject {
    from: string;
    to: string;
    state: boolean;
}
export declare type TransferAccountAllowedEvent = TypedEvent<[
    string,
    string,
    boolean
], TransferAccountAllowedEventObject>;
export declare type TransferAccountAllowedEventFilter = TypedEventFilter<TransferAccountAllowedEvent>;
export interface logEventObject {
    arg0: string;
}
export declare type logEvent = TypedEvent<[string], logEventObject>;
export declare type logEventFilter = TypedEventFilter<logEvent>;
export interface log_addressEventObject {
    arg0: string;
}
export declare type log_addressEvent = TypedEvent<[string], log_addressEventObject>;
export declare type log_addressEventFilter = TypedEventFilter<log_addressEvent>;
export interface log_bytesEventObject {
    arg0: string;
}
export declare type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;
export declare type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;
export interface log_bytes32EventObject {
    arg0: string;
}
export declare type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;
export declare type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;
export interface log_intEventObject {
    arg0: BigNumber;
}
export declare type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;
export declare type log_intEventFilter = TypedEventFilter<log_intEvent>;
export interface log_named_addressEventObject {
    key: string;
    val: string;
}
export declare type log_named_addressEvent = TypedEvent<[
    string,
    string
], log_named_addressEventObject>;
export declare type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;
export interface log_named_bytesEventObject {
    key: string;
    val: string;
}
export declare type log_named_bytesEvent = TypedEvent<[
    string,
    string
], log_named_bytesEventObject>;
export declare type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;
export interface log_named_bytes32EventObject {
    key: string;
    val: string;
}
export declare type log_named_bytes32Event = TypedEvent<[
    string,
    string
], log_named_bytes32EventObject>;
export declare type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;
export interface log_named_decimal_intEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_intEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_intEventObject>;
export declare type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;
export interface log_named_decimal_uintEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_uintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_uintEventObject>;
export declare type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;
export interface log_named_intEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_intEvent = TypedEvent<[
    string,
    BigNumber
], log_named_intEventObject>;
export declare type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;
export interface log_named_stringEventObject {
    key: string;
    val: string;
}
export declare type log_named_stringEvent = TypedEvent<[
    string,
    string
], log_named_stringEventObject>;
export declare type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;
export interface log_named_uintEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_uintEvent = TypedEvent<[
    string,
    BigNumber
], log_named_uintEventObject>;
export declare type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;
export interface log_stringEventObject {
    arg0: string;
}
export declare type log_stringEvent = TypedEvent<[string], log_stringEventObject>;
export declare type log_stringEventFilter = TypedEventFilter<log_stringEvent>;
export interface log_uintEventObject {
    arg0: BigNumber;
}
export declare type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;
export declare type log_uintEventFilter = TypedEventFilter<log_uintEvent>;
export interface logsEventObject {
    arg0: string;
}
export declare type logsEvent = TypedEvent<[string], logsEventObject>;
export declare type logsEventFilter = TypedEventFilter<logsEvent>;
export interface CreditFacadeTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CreditFacadeTestInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;
        cft(overrides?: CallOverrides): Promise<[string]>;
        creditConfigurator(overrides?: CallOverrides): Promise<[string]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        failed(overrides?: CallOverrides): Promise<[boolean]>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_01A_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_01_constructor_reverts_for_zero_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_02_functions_reverts_if_borrower_has_no_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_03A_openCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_03C_closeCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_03D_liquidate_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_03E_addCollateral_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_03F_multicall_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_05_openCreditAccount_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_06_openCreditAccount_reverts_for_hf_less_one(leverageFactor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one(amount: BigNumberish, token1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_10_no_free_flashloans_during_openCreditAccount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_12_closeCreditAccount_runs_operations_in_correct_order(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_17_increaseDebt_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_18A_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_18B_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_19_decreaseDebt_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_21_addCollateral_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_23_multicall_reverts_for_unknown_methods(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_24_multicall_reverts_for_creditManager_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_25_multicall_reverts_for_non_adapters(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_29_multicall_works_with_adapters_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_31_approve_works_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_34_transferAccountOwnership_reverts_if_hf_less_1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_39_enable_token_balance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_40_isTokenAllowed_works_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_41_calcTotalValue_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_42_calcCreditAccountHealthFactor_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_43_hasOpenedCreditAccount_returns_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_44_config_functions_revert_if_called_non_configurator(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_FA_45_revertIfBalanceLessThan_works_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    cft(overrides?: CallOverrides): Promise<string>;
    creditConfigurator(overrides?: CallOverrides): Promise<string>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    failed(overrides?: CallOverrides): Promise<boolean>;
    setUp(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_01A_constructor_sets_correct_values(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_01_constructor_reverts_for_zero_address(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_02_functions_reverts_if_borrower_has_no_account(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_03A_openCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_03C_closeCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_03D_liquidate_correctly_wraps_ETH(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_03E_addCollateral_correctly_wraps_ETH(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_03F_multicall_correctly_wraps_ETH(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_05_openCreditAccount_sets_correct_values(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_06_openCreditAccount_reverts_for_hf_less_one(leverageFactor: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one(amount: BigNumberish, token1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_10_no_free_flashloans_during_openCreditAccount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_12_closeCreditAccount_runs_operations_in_correct_order(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_17_increaseDebt_executes_actions_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_18A_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_18B_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_19_decreaseDebt_executes_actions_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_21_addCollateral_executes_actions_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_23_multicall_reverts_for_unknown_methods(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_24_multicall_reverts_for_creditManager_address(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_25_multicall_reverts_for_non_adapters(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_29_multicall_works_with_adapters_calls_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_31_approve_works_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_34_transferAccountOwnership_reverts_if_hf_less_1(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_39_enable_token_balance(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_40_isTokenAllowed_works_as_expected(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_41_calcTotalValue_computes_correctly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_42_calcCreditAccountHealthFactor_computes_correctly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_43_hasOpenedCreditAccount_returns_correct_values(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_44_config_functions_revert_if_called_non_configurator(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_FA_45_revertIfBalanceLessThan_works_correctly(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        cft(overrides?: CallOverrides): Promise<string>;
        creditConfigurator(overrides?: CallOverrides): Promise<string>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        setUp(overrides?: CallOverrides): Promise<void>;
        test_FA_01A_constructor_sets_correct_values(overrides?: CallOverrides): Promise<void>;
        test_FA_01_constructor_reverts_for_zero_address(overrides?: CallOverrides): Promise<void>;
        test_FA_02_functions_reverts_if_borrower_has_no_account(overrides?: CallOverrides): Promise<void>;
        test_FA_03A_openCreditAccount_correctly_wraps_ETH(overrides?: CallOverrides): Promise<void>;
        test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH(overrides?: CallOverrides): Promise<void>;
        test_FA_03C_closeCreditAccount_correctly_wraps_ETH(overrides?: CallOverrides): Promise<void>;
        test_FA_03D_liquidate_correctly_wraps_ETH(overrides?: CallOverrides): Promise<void>;
        test_FA_03E_addCollateral_correctly_wraps_ETH(overrides?: CallOverrides): Promise<void>;
        test_FA_03F_multicall_correctly_wraps_ETH(overrides?: CallOverrides): Promise<void>;
        test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance(overrides?: CallOverrides): Promise<void>;
        test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account(overrides?: CallOverrides): Promise<void>;
        test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode(overrides?: CallOverrides): Promise<void>;
        test_FA_05_openCreditAccount_sets_correct_values(overrides?: CallOverrides): Promise<void>;
        test_FA_06_openCreditAccount_reverts_for_hf_less_one(leverageFactor: BigNumberish, overrides?: CallOverrides): Promise<void>;
        test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden(overrides?: CallOverrides): Promise<void>;
        test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order(overrides?: CallOverrides): Promise<void>;
        test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one(amount: BigNumberish, token1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        test_FA_10_no_free_flashloans_during_openCreditAccount(overrides?: CallOverrides): Promise<void>;
        test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block(overrides?: CallOverrides): Promise<void>;
        test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount(overrides?: CallOverrides): Promise<void>;
        test_FA_12_closeCreditAccount_runs_operations_in_correct_order(overrides?: CallOverrides): Promise<void>;
        test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: CallOverrides): Promise<void>;
        test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1(overrides?: CallOverrides): Promise<void>;
        test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events(overrides?: CallOverrides): Promise<void>;
        test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: CallOverrides): Promise<void>;
        test_FA_17_increaseDebt_executes_actions_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_18A_increaseDebt_revets_if_more_than_block_limit(overrides?: CallOverrides): Promise<void>;
        test_FA_18B_increaseDebt_revets_if_more_than_block_limit(overrides?: CallOverrides): Promise<void>;
        test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled(overrides?: CallOverrides): Promise<void>;
        test_FA_19_decreaseDebt_executes_actions_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount(overrides?: CallOverrides): Promise<void>;
        test_FA_21_addCollateral_executes_actions_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes(overrides?: CallOverrides): Promise<void>;
        test_FA_23_multicall_reverts_for_unknown_methods(overrides?: CallOverrides): Promise<void>;
        test_FA_24_multicall_reverts_for_creditManager_address(overrides?: CallOverrides): Promise<void>;
        test_FA_25_multicall_reverts_for_non_adapters(overrides?: CallOverrides): Promise<void>;
        test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one(overrides?: CallOverrides): Promise<void>;
        test_FA_29_multicall_works_with_adapters_calls_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract(overrides?: CallOverrides): Promise<void>;
        test_FA_31_approve_works_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled(overrides?: CallOverrides): Promise<void>;
        test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance(overrides?: CallOverrides): Promise<void>;
        test_FA_34_transferAccountOwnership_reverts_if_hf_less_1(overrides?: CallOverrides): Promise<void>;
        test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed(overrides?: CallOverrides): Promise<void>;
        test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max(overrides?: CallOverrides): Promise<void>;
        test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly(overrides?: CallOverrides): Promise<void>;
        test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account(overrides?: CallOverrides): Promise<void>;
        test_FA_39_enable_token_balance(overrides?: CallOverrides): Promise<void>;
        test_FA_40_isTokenAllowed_works_as_expected(overrides?: CallOverrides): Promise<void>;
        test_FA_41_calcTotalValue_computes_correctly(overrides?: CallOverrides): Promise<void>;
        test_FA_42_calcCreditAccountHealthFactor_computes_correctly(overrides?: CallOverrides): Promise<void>;
        test_FA_43_hasOpenedCreditAccount_returns_correct_values(overrides?: CallOverrides): Promise<void>;
        test_FA_44_config_functions_revert_if_called_non_configurator(overrides?: CallOverrides): Promise<void>;
        test_FA_45_revertIfBalanceLessThan_works_correctly(overrides?: CallOverrides): Promise<void>;
        underlying(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddCollateral(address,address,uint256)"(onBehalfOf?: string | null, token?: string | null, value?: null): AddCollateralEventFilter;
        AddCollateral(onBehalfOf?: string | null, token?: string | null, value?: null): AddCollateralEventFilter;
        "CloseCreditAccount(address,address)"(owner?: string | null, to?: string | null): CloseCreditAccountEventFilter;
        CloseCreditAccount(owner?: string | null, to?: string | null): CloseCreditAccountEventFilter;
        "DecreaseBorrowedAmount(address,uint256)"(borrower?: string | null, amount?: null): DecreaseBorrowedAmountEventFilter;
        DecreaseBorrowedAmount(borrower?: string | null, amount?: null): DecreaseBorrowedAmountEventFilter;
        "ExecuteOrder(address,address)"(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        ExecuteOrder(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        "IncreaseBorrowedAmount(address,uint256)"(borrower?: string | null, amount?: null): IncreaseBorrowedAmountEventFilter;
        IncreaseBorrowedAmount(borrower?: string | null, amount?: null): IncreaseBorrowedAmountEventFilter;
        "LiquidateCreditAccount(address,address,address,uint256)"(owner?: string | null, liquidator?: string | null, to?: string | null, remainingFunds?: null): LiquidateCreditAccountEventFilter;
        LiquidateCreditAccount(owner?: string | null, liquidator?: string | null, to?: string | null, remainingFunds?: null): LiquidateCreditAccountEventFilter;
        "MultiCallFinished()"(): MultiCallFinishedEventFilter;
        MultiCallFinished(): MultiCallFinishedEventFilter;
        "MultiCallStarted(address)"(borrower?: string | null): MultiCallStartedEventFilter;
        MultiCallStarted(borrower?: string | null): MultiCallStartedEventFilter;
        "NewConfigurator(address)"(newConfigurator?: string | null): NewConfiguratorEventFilter;
        NewConfigurator(newConfigurator?: string | null): NewConfiguratorEventFilter;
        "OpenCreditAccount(address,address,uint256,uint16)"(onBehalfOf?: string | null, creditAccount?: string | null, borrowAmount?: null, referralCode?: null): OpenCreditAccountEventFilter;
        OpenCreditAccount(onBehalfOf?: string | null, creditAccount?: string | null, borrowAmount?: null, referralCode?: null): OpenCreditAccountEventFilter;
        "TransferAccount(address,address)"(oldOwner?: string | null, newOwner?: string | null): TransferAccountEventFilter;
        TransferAccount(oldOwner?: string | null, newOwner?: string | null): TransferAccountEventFilter;
        "TransferAccountAllowed(address,address,bool)"(from?: string | null, to?: string | null, state?: null): TransferAccountAllowedEventFilter;
        TransferAccountAllowed(from?: string | null, to?: string | null, state?: null): TransferAccountAllowedEventFilter;
        "log(string)"(arg0?: null): logEventFilter;
        log(arg0?: null): logEventFilter;
        "log_address(address)"(arg0?: null): log_addressEventFilter;
        log_address(arg0?: null): log_addressEventFilter;
        "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
        log_bytes(arg0?: null): log_bytesEventFilter;
        "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
        log_bytes32(arg0?: null): log_bytes32EventFilter;
        "log_int(int256)"(arg0?: null): log_intEventFilter;
        log_int(arg0?: null): log_intEventFilter;
        "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
        log_named_address(key?: null, val?: null): log_named_addressEventFilter;
        "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
        log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;
        "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
        log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;
        "log_named_decimal_int(string,int256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        "log_named_decimal_uint(string,uint256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
        log_named_int(key?: null, val?: null): log_named_intEventFilter;
        "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
        log_named_string(key?: null, val?: null): log_named_stringEventFilter;
        "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
        log_named_uint(key?: null, val?: null): log_named_uintEventFilter;
        "log_string(string)"(arg0?: null): log_stringEventFilter;
        log_string(arg0?: null): log_stringEventFilter;
        "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
        log_uint(arg0?: null): log_uintEventFilter;
        "logs(bytes)"(arg0?: null): logsEventFilter;
        logs(arg0?: null): logsEventFilter;
    };
    estimateGas: {
        IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;
        cft(overrides?: CallOverrides): Promise<BigNumber>;
        creditConfigurator(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        failed(overrides?: CallOverrides): Promise<BigNumber>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_01A_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_01_constructor_reverts_for_zero_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_02_functions_reverts_if_borrower_has_no_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_03A_openCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_03C_closeCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_03D_liquidate_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_03E_addCollateral_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_03F_multicall_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_05_openCreditAccount_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_06_openCreditAccount_reverts_for_hf_less_one(leverageFactor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one(amount: BigNumberish, token1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_10_no_free_flashloans_during_openCreditAccount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_12_closeCreditAccount_runs_operations_in_correct_order(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_17_increaseDebt_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_18A_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_18B_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_19_decreaseDebt_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_21_addCollateral_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_23_multicall_reverts_for_unknown_methods(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_24_multicall_reverts_for_creditManager_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_25_multicall_reverts_for_non_adapters(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_29_multicall_works_with_adapters_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_31_approve_works_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_34_transferAccountOwnership_reverts_if_hf_less_1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_39_enable_token_balance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_40_isTokenAllowed_works_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_41_calcTotalValue_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_42_calcCreditAccountHealthFactor_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_43_hasOpenedCreditAccount_returns_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_44_config_functions_revert_if_called_non_configurator(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_FA_45_revertIfBalanceLessThan_works_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_01A_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_01_constructor_reverts_for_zero_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_02_functions_reverts_if_borrower_has_no_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_03A_openCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_03B_openCreditAccountMulticall_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_03C_closeCreditAccount_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_03D_liquidate_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_03E_addCollateral_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_03F_multicall_correctly_wraps_ETH(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_04A_openCreditAccount_reverts_for_using_addresses_which_is_not_allowed_by_transfer_allowance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_04B_openCreditAccount_reverts_for_non_whitelisted_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_04C_openCreditAccount_burns_token_in_whitelisted_mode(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_05_openCreditAccount_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_06_openCreditAccount_reverts_for_hf_less_one(leverageFactor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_07_openCreditAccountMulticall_reverts_if_increase_debt_forbidden(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_08_openCreditAccountMulticall_runs_operations_in_correct_order(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_09_openCreditAccountMulticall_cant_open_credit_account_with_hf_less_one(amount: BigNumberish, token1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_10_no_free_flashloans_during_openCreditAccount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_11A_openCreditAccount_reverts_if_met_borrowed_limit_per_block(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_11B_openCreditAccount_reverts_if_amount_less_minBorrowedAmount_or_bigger_than_maxBorrowedAmount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_12_closeCreditAccount_runs_operations_in_correct_order(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_13_closeCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_14_liquidateCreditAccount_reverts_if_hf_is_greater_than_1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_15_liquidateCreditAccount_executes_needed_calls_and_emits_events(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_16_liquidateCreditAccount_reverts_on_internal_call_in_multicall_on_closure(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_17_increaseDebt_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_18A_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_18B_increaseDebt_revets_if_more_than_block_limit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_18C_increaseDebt_revets_isIncreaseDebtForbidden_is_enabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_19_decreaseDebt_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_20_decreaseDebt_revets_if_less_than_minBorrowedAmount(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_21_addCollateral_executes_actions_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_22_multicall_reverts_if_calldata_length_is_less_than_4_bytes(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_23_multicall_reverts_for_unknown_methods(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_24_multicall_reverts_for_creditManager_address(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_25_multicall_reverts_for_non_adapters(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_26_multicall_addCollateral_and_increase_debt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_27_multicall_addCollateral_and_decreaseDebt_works_with_creditFacade_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_28_multicall_reverts_for_decrease_opeartion_after_increase_one(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_29_multicall_works_with_adapters_calls_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_30_approve_reverts_for_not_allowed_token_and_not_allower_contract(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_31_approve_works_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_32_transferAccountOwnership_reverts_if_whitelisted_enabled(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_33_transferAccountOwnership_reverts_if_to_user_doesnt_provide_allowance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_34_transferAccountOwnership_reverts_if_hf_less_1(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_35_transferAccountOwnership_transfers_account_if_its_allowed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_36_checkAndUpdateBorrowedBlockLimit_doesnt_change_block_limit_if_set_to_max(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_37_checkAndUpdateBorrowedBlockLimit_updates_block_limit_properly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_38_transferAccountOwnership_with_allowed_to_transfers_account(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_39_enable_token_balance(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_40_isTokenAllowed_works_as_expected(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_41_calcTotalValue_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_42_calcCreditAccountHealthFactor_computes_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_43_hasOpenedCreditAccount_returns_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_44_config_functions_revert_if_called_non_configurator(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_FA_45_revertIfBalanceLessThan_works_correctly(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
